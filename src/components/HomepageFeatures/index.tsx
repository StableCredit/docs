import React from "react"
import clsx from "clsx"
import styles from "./styles.module.css"

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <div className={clsx("col col--4")}>
            <div className="text--center">
              <img
                height="150"
                src={require("@site/static/img/cog.png").default}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Unlock Capital Efficiency</h3>
              <p>
                Stable Credits close circular trade loops, simplifying capital
                management and resource optimization within trade networks.
              </p>
            </div>
          </div>
          <div className={clsx("col col--4")}>
            <div className="text--center">
              <img
                height="150"
                src={require("@site/static/img/deals.png").default}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Drive Collaboration</h3>
              <p>
                Foster collaborative networks, drive member growth, enable
                innovation, and achieve collective goals.
              </p>
            </div>
          </div>
          <div className={clsx("col col--4")}>
            <div className="text--center">
              <img
                height="150"
                src={require("@site/static/img/secure.png").default}
              />
            </div>
            <div className="text--center padding-horiz--md">
              <h3>Stay Safe at Scale</h3>
              <p>Grow trade networks with economics that keep members safe.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
