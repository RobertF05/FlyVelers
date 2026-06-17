import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../../components/footer.jsx";
import { useCart } from "../../context/CartContext.jsx";
import "./Profile.css";

const formatPlan = (plan) => {
  if (!plan) {
    return "No active subscription";
  }

  return `${plan.charAt(0).toUpperCase()}${plan.slice(1)} plan`;
};

function Profile() {
  const {
    cancelSubscription,
    isLoggedIn,
    logOut,
    subscriptionPlan,
    userProfile,
    userPurchaseHistory,
  } = useCart();
  const navigate = useNavigate();
  const [historyOpen, setHistoryOpen] = useState(false);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  const displayName = userProfile?.fullName || "FlyVelers User";

  const handleLogOut = () => {
    logOut();
    navigate("/main");
  };

  return (
    <div className="profile-page">
      <main className="profile-shell">
        <section className="profile-hero">
          <span>Traveler profile</span>
          <h1>{displayName}</h1>
          <p>Manage your account information, active subscription and session.</p>
        </section>

        <section className="profile-grid">
          <article className="profile-panel">
            <span className="profile-panel-kicker">Account information</span>
            <h2>Personal details</h2>
            <dl className="profile-details">
              <div>
                <dt>Full name</dt>
                <dd>{displayName}</dd>
              </div>
              <div>
                <dt>Gmail</dt>
                <dd>{userProfile?.email || "Not specified"}</dd>
              </div>
              <div>
                <dt>Birth date</dt>
                <dd>{userProfile?.birthDate || "Not specified"}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>{userProfile?.phone || "Not specified"}</dd>
              </div>
              <div>
                <dt>Country</dt>
                <dd>{userProfile?.country || "Not specified"}</dd>
              </div>
              <div>
                <dt>City</dt>
                <dd>{userProfile?.city || "Not specified"}</dd>
              </div>
            </dl>
          </article>

          <article className="profile-panel subscription-profile-panel">
            <span className="profile-panel-kicker">Subscription</span>
            <h2>{formatPlan(subscriptionPlan)}</h2>
            <p>
              {subscriptionPlan
                ? "Your current travel service plan is active in FlyVelers."
                : "You do not have an active subscription plan yet."}
            </p>
            <div className="profile-actions">
              <button
                type="button"
                className="profile-secondary-btn"
                disabled={!subscriptionPlan}
                onClick={cancelSubscription}
              >
                Cancel subscription
              </button>
              <button
                type="button"
                className="profile-history-btn"
                onClick={() => setHistoryOpen(true)}
              >
                Purchase history
              </button>
              <button type="button" className="profile-danger-btn" onClick={handleLogOut}>
                Log out
              </button>
            </div>
          </article>
        </section>
      </main>
      <Footer />

      {historyOpen ? (
        <div
          className="purchase-history-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="purchase-history-title"
          onClick={() => setHistoryOpen(false)}
        >
          <article
            className="purchase-history-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="purchase-history-close"
              onClick={() => setHistoryOpen(false)}
              aria-label="Close purchase history"
            >
              x
            </button>
            <span>Account activity</span>
            <h2 id="purchase-history-title">Purchase history</h2>

            <div className="purchase-history-list">
              {userPurchaseHistory.length > 0 ? (
                userPurchaseHistory.map((purchase) => (
                  <article key={purchase.id} className="purchase-history-item">
                    <div className="purchase-history-item-header">
                      <div>
                        <span>{purchase.type === "subscription" ? "Subscription" : "Cart purchase"}</span>
                        <h3>{purchase.title}</h3>
                      </div>
                      <strong>
                        {typeof purchase.total === "number"
                          ? `$${purchase.total.toLocaleString("en-US")}`
                          : purchase.total}
                      </strong>
                    </div>
                    <time dateTime={purchase.purchasedAt}>
                      {new Date(purchase.purchasedAt).toLocaleString()}
                    </time>
                    <ul>
                      {(purchase.items || []).map((item) => (
                        <li key={`${purchase.id}-${item.id}`}>
                          <span>{item.title}</span>
                          <small>{item.price}</small>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))
              ) : (
                <p className="purchase-history-empty">No purchases have been completed yet.</p>
              )}
            </div>
          </article>
        </div>
      ) : null}
    </div>
  );
}

export default Profile;
