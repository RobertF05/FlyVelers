import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CART_STORAGE_KEY = "flyvelers-cart";
const SUBSCRIPTION_STORAGE_KEY = "flyvelers-subscription-plan";
const AUTH_STORAGE_KEY = "flyvelers-authenticated";
const USER_PROFILE_STORAGE_KEY = "flyvelers-user-profile";
const PURCHASE_HISTORY_STORAGE_KEY = "flyvelers-purchase-history";

const CartContext = createContext(null);

const readStoredCart = () => {
  try {
    const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    return Array.isArray(storedCart) ? storedCart : [];
  } catch {
    return [];
  }
};

const readStoredSubscription = () => {
  const storedPlan = localStorage.getItem(SUBSCRIPTION_STORAGE_KEY);
  return ["basic", "standard", "premium"].includes(storedPlan) ? storedPlan : null;
};

const readStoredUserProfile = () => {
  try {
    const storedProfile = JSON.parse(localStorage.getItem(USER_PROFILE_STORAGE_KEY) || "null");
    return storedProfile && typeof storedProfile === "object" ? storedProfile : null;
  } catch {
    return null;
  }
};

const readStoredPurchaseHistory = () => {
  try {
    const storedHistory = JSON.parse(localStorage.getItem(PURCHASE_HISTORY_STORAGE_KEY) || "[]");
    return Array.isArray(storedHistory) ? storedHistory : [];
  } catch {
    return [];
  }
};

const parsePrice = (price) => {
  if (!price) {
    return 0;
  }

  const match = String(price).replace(/,/g, "").match(/\d+(\.\d+)?/);
  return match ? Number(match[0]) : 0;
};

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(readStoredCart);
  const [subscriptionPlan, setSubscriptionPlanState] = useState(readStoredSubscription);
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem(AUTH_STORAGE_KEY) === "true",
  );
  const [userProfile, setUserProfileState] = useState(readStoredUserProfile);
  const [purchaseHistory, setPurchaseHistory] = useState(readStoredPurchaseHistory);

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    if (subscriptionPlan) {
      localStorage.setItem(SUBSCRIPTION_STORAGE_KEY, subscriptionPlan);
      return;
    }

    localStorage.removeItem(SUBSCRIPTION_STORAGE_KEY);
  }, [subscriptionPlan]);

  const cartCount = cartItems.reduce((total, item) => total + (item.quantity || 1), 0);
  const cartTotal = cartItems.reduce(
    (total, item) => total + parsePrice(item.price) * (item.quantity || 1),
    0,
  );

  useEffect(() => {
    const handleStorageChange = () => {
      setIsLoggedIn(localStorage.getItem(AUTH_STORAGE_KEY) === "true");
      setUserProfileState(readStoredUserProfile());
      setSubscriptionPlanState(readStoredSubscription());
      setPurchaseHistory(readStoredPurchaseHistory());
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("flyvelers-auth-change", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("flyvelers-auth-change", handleStorageChange);
    };
  }, []);

  const isAuthenticated = () => isLoggedIn;

  const addToCart = (item) => {
    let added = false;

    setCartItems((currentItems) => {
      if (currentItems.some((currentItem) => currentItem.id === item.id)) {
        return currentItems;
      }

      added = true;
      return [...currentItems, { ...item, quantity: item.quantity || 1 }];
    });

    return added;
  };

  const removeFromCart = (itemId) => {
    setCartItems((currentItems) => currentItems.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const setSubscriptionPlan = (planId) => {
    setSubscriptionPlanState(planId);
  };

  const addPurchaseRecord = (record) => {
    const nextRecord = {
      ...record,
      id: `purchase-${Date.now()}`,
      purchasedAt: new Date().toISOString(),
      userEmail: userProfile?.email || "guest",
    };

    setPurchaseHistory((currentHistory) => {
      const nextHistory = [nextRecord, ...currentHistory];
      localStorage.setItem(PURCHASE_HISTORY_STORAGE_KEY, JSON.stringify(nextHistory));
      return nextHistory;
    });
  };

  const cancelSubscription = () => {
    setSubscriptionPlanState(null);
  };

  const logOut = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    setIsLoggedIn(false);
  };

  const userPurchaseHistory = purchaseHistory.filter(
    (purchase) => purchase.userEmail === (userProfile?.email || "guest"),
  );

  const value = useMemo(
    () => ({
      addPurchaseRecord,
      addToCart,
      cancelSubscription,
      cartCount,
      cartItems,
      cartTotal,
      clearCart,
      isLoggedIn,
      isAuthenticated,
      logOut,
      removeFromCart,
      setSubscriptionPlan,
      subscriptionPlan,
      userProfile,
      userPurchaseHistory,
    }),
    [
      cartCount,
      cartItems,
      cartTotal,
      isLoggedIn,
      purchaseHistory,
      subscriptionPlan,
      userProfile,
    ],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used inside CartProvider");
  }

  return context;
}
