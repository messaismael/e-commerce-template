import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import '../css/main.css'
import Home from './home'
import HeroCarousel from './hero-carousel';
import NavCategory from './nav-category'
import Category from './category'
import { arrCategory } from './stock'

class Main extends React.Component {
    render() {
        return (
            <div className="container main">
                <HeroCarousel />
                <Router>
                    <NavCategory />

                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        {
                            arrCategory.map((categ, i) => {
                                return (
                                    <Route path={"/"+ categ } key={i} >
                                        <Category category={ categ } />
                                    </Route>
                                )
                            })
                        }
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Main;