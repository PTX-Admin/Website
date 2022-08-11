import React from 'react';
import styles from './HomeModel.module.css';
export default function HomeModel() {
  return (
    <div className={`cont ${styles.modelCont}`}>
      <div data-aos="zoom-in-down" className={styles.model}>
        <h1>
          Sustainable Emissions <span className={styles.red}>Model (SEM)</span>
        </h1>
        <p>
          Once per 30 days, APY will be reduced by 10% from the previous month. This allows for the
          token to continue to maintain positive price action pressure while the PTX token rebases
          with a flexible supply. This will continue each month for 12 events, ending with a fixed
          .5% daily yield rate (rebasing every 30 minutes).
        </p>
        <p>
          What do we mean by this? While it is not a classical “halving” in the sense of daily yield
          being reduced by 50%, it is a means of reducing emissions rate over time in a structured
          and predictable means in order to maintain growth of the protocol.{' '}
        </p>
        <p>
          Historically speaking, these types of emissions models to promote sustainability have
          inspired genuine growth in market cap and token price.
        </p>
        <p>
          Long-term sustainability and transparency is a priority for ProjectX. As reductions in
          increasing supply are implemented, the more the positive price action variables can push
          the token price action.
        </p>
        <p>
          While we are not BTC and certainly have different tokenomic variables, the economic theory
          of reducing minted token yield is sound and proven in finance.
        </p>
      </div>
    </div>
  );
}
