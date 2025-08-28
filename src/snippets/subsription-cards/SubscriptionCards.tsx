import styles from './SubscriptionCards.module.css';

const plans = [
  {
    name: 'Basic',
    price: '$9 / mo',
    description: 'Essential features to get started. Perfect for individuals.',
    features: ['✔ 5 Projects', '✔ Basic Support', '✔ Community Access'],
  },
  {
    name: 'Standard',
    price: '$19 / mo',
    description:
      'Advanced tools and priority support. Great for professionals.',
    features: [
      '✔ Unlimited Projects',
      '✔ Priority Support',
      '✔ Team Access',
    ],
    popular: true,
  },
  {
    name: 'Premium',
    price: '$29 / mo',
    description: 'All features unlocked. Best for teams and businesses.',
    features: [
      '✔ Everything in Pro',
      '✔ Dedicated Manager',
      '✔ Custom Reports',
    ],
  },
];

export default function SubscriptionCards() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`${styles.card} ${plan.popular ? styles.popular : ''}`}
          >
            {plan.popular && <span className={styles.badge}>Most Popular</span>}
            <h2>{plan.name}</h2>
            <p className={styles.price}>{plan.price}</p>
            <p className={styles.desc}>{plan.description}</p>
            <ul className={styles.features}>
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className={styles.button}>Choose Plan</button>
          </div>
        ))}
      </div>
    </main>
  );
}
