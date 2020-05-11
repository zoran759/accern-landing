import React, { useState, useReducer, useEffect, useRef } from "react";
import Header from "../components/header";
import ContentLoader from "../components/contentloader";
import PosedRouter from "../components/pseudorouter";
import { globalHistory } from "@reach/router";
import { Context } from "../context/context";
import reducerLayout from "../context/reducerLayout";
import reducerPages from "../context/reducerPages";
import reducerNotifi from "../context/reducerNotifi";
import reducerRequestTrial from "../context/reducerRequestTrial";
import reducerUserMail from "../context/reducerUserMail";
import { settings } from "../data/settings";
import Loader from "../components/loader/Loader";
import Scrollbar from 'react-smooth-scrollbar';
import ReactDynamicImport from "react-dynamic-import";
import RequestTrial from "../components/requesttrial";

import "./App.scss";
import "../styles/style.scss";

const App = () => {

  const [state, dispatchLayout] = useReducer(reducerLayout, {
    loadderState: "destroyed",
    //loadderState: "load",
    isShowContent: true,
    preloadStatus: "loading",
    isPause: false,
    headerState: "",
    isDisabledPreloader: false,
  });

  const [isRequestTrial, dispatchRequestTrial] = useReducer(reducerRequestTrial, false);
  const [userMail, dispatchUserMail] = useReducer(reducerUserMail, "");

  const [components, setComponents] = useState([])

  const [scroll, setScroll] = useState(0);

  const scrollB = useRef();

  const [pages, dispatchPages] = useReducer(reducerPages, {});
  const [notification, dispatchNotifi] = useReducer(reducerNotifi, {});
  const [isRendered, setIsRendered] = useState(false);

  const [page, setPage] = useState({ currentPage: window.location.pathname, previousPage: null });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

    importComponents();

    setTimeout(() => {
      dispatchLayout({ type: "SET_LAYOUT", data: { isShowContent: true } });
      setIsVisible(true);
    }, 100);

    setTimeout(() => {
      document.querySelector("#loader-bg").remove();
      setTimeout(() => {
        dispatchLayout({ type: "SET_LAYOUT", data: { loadderState: "loaded" } });
      }, 1000)

      setTimeout(() => {
        dispatchLayout({ type: "SET_LAYOUT", data: { loadderState: "destroyed" } });
      }, 2200)
    }, 1000);

    scrollB.current.scrollbar.track.xAxis.element.remove();

  }, []);

  useEffect(() => {
    setlayout();
  }, [page.currentPage]);

  globalHistory.listen((params) => {
    setPage(prevState => ({ ...prevState, currentPage: params.location.pathname }));
  })

  const setlayout = () => {
    const { currentPage } = page;

    setPreloader();
    setPage(prevState => ({ ...prevState, previousPage: currentPage }));
  }

  const setPreloader = () => {
    const { currentPage } = page;
    const { isDisabledPreloader } = state;

    if (!isDisabledPreloader) {
      if (currentPage == "/") {
        dispatchLayout({ type: "SET_LAYOUT", data: { preloadStatus: 'loaded' } });
      } else {
        dispatchLayout({ type: "SET_LAYOUT", data: { preloadStatus: 'loading' } });
      }
    }
  }

  const importComponent = (name, link, i) => {
    const loader = () => import(`../pages/${name}`);
    const Component = ReactDynamicImport({ loader });

    return <Component key={`r-${i}`} path={link} />
  }

  const importComponents = () => {
    const comps = [];

    settings.navigation.map((nav, i) => {
      if (nav.component) comps.push(importComponent(nav.component, nav.link, i));

      if (nav.sub) {
        nav.sub.columns.forEach((column) => {
          column.links.forEach((link, z) => {
            link.component && comps.push(importComponent(link.component, link.link, i + z));
          });

        })
      }
    })

    setComponents(comps);

    return comps;
  }

  return (
    <Context.Provider value={{ dispatchLayout, pages, dispatchPages, notification, dispatchNotifi, isRequestTrial, dispatchRequestTrial, userMail, dispatchUserMail }}>
      <Header scroll={scroll} state={state.headerState} />
      <Scrollbar className="scoll-bar" ref={scrollB} onScroll={e => setScroll(e.offset.y)}>
        <div className="app">
          <ContentLoader preloadStatus={state.preloadStatus} />
          <PosedRouter isPause={state.isPause} isDisabledPreloader={state.isDisabledPreloader}>
            {state.isShowContent && components}
          </PosedRouter>
        </div>
      </Scrollbar>
      <RequestTrial />
      <Loader loaderState={state.loadderState} />
    </Context.Provider >
  );
}

export default App;
