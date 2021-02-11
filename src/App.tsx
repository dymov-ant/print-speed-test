import React, { FC } from "react"
import { Text } from "./components/Text"
import { Statistics } from "./components/Statistics"

export const App: FC = () => {
  return (
      <div className="vh-100 bg-info">
          <div className="container d-flex justify-content-center pt-5">
              <div className="d-flex justify-content-between bg-white rounded-3 p-5" style={{width: "60rem"}}>
                  <Text/>
                  <Statistics/>
              </div>
          </div>
      </div>
  )
}