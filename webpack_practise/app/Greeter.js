/**
 * Created by MangoGan on 2017/12/24.
 */
 import React, {Component} from 'react'
 import config from './config.json'
 import styles from './Greeter.css'//导入


class Greeter extends Component{
  render() {
    return (
      <div className={styles.root} >
        {config.greetText}
      </div>
    )
  }
}
export default Greeter