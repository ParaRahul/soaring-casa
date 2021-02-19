import React from "react";
import { AnimateSharedLayout, AnimatePresence } from "framer-motion";
import { Header } from "./Header";
import { Item } from "./Item";
import { List } from "./List";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './club.css'

function Store({ match }) {
  let { id } = match.params;
  const imageHasLoaded = true;

  console.log('App -',id)
  console.log('App match params -',match.params)
  return (
    <React.Fragment>
      <List selectedId={id} />
      <AnimatePresence>
        {id && imageHasLoaded && <Item id={id} key="item" />}
      </AnimatePresence>
    </React.Fragment>
  );
}

export default function Club() {
  return (
    <div id="club-component">
      <div className="container">
      <AnimateSharedLayout type="crossfade">
        <Header />
        <Router>
          <Route path={["/cards/:id","/cards"]} component={Store} />
        </Router>
      </AnimateSharedLayout>
    </div>
  </div>

  );
}
