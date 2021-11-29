import './Content.css'
import React from "react"
import { Switch, Route } from 'react-router-dom'
import QuemSomos from '../../views/contents/QuemSomos'
import UseState from '../../views/contents/UseState'
import Manga from '../../views/contents/Manga'
import Historia from '../../views/contents/Historia'
import NaoEncontrado from '../../views/contents/NaoEncontrado'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/">
                <QuemSomos />
            </Route>
            <Route path="/Historia">
                <Historia />
            </Route>
            <Route path="/Manga">
                <Manga />
            </Route>
            <Route path="/Historia">
                <Historia />
            </Route>
            <Route path="*">
                <NaoEncontrado />
            </Route>
        </Switch>
    </main>
)
export default Content