import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@mui/material";
import ToDoContainer from "containers/ToDoContainer";
import Header from "components/Header";
import LandingPageStyles from "./LandingStyles";
import GenericModal from "components/GenericModal";
import {
  ADD_NEW_CATEGORY_BUTTON,
  MOCKUP_IMGS_FETCH,
} from "constants/actionTypes";
import AddNewListMenu from "components/AddNewListMenu";
import { MODAL_TYPES } from "constants/constants";
import GenericPopUp from "components/GenericPopUp";
import PureDialogBox from "purecomponents/PureDialogBox";
import PureOptionsBox from "purecomponents/PureOptionsBox";
import PureAccordion from "purecomponents/PureAccordion";
import PureRating from "purecomponents/PureRating";
import PureCarousel from "purecomponents/PureCarousel";
import PureNavBar from "purecomponents/PureNavBar";
import UploadImage from "components/UploadImage";
import Scanner from "components/Scanner";
import PureCalender from "purecomponents/PureCalender";
import PureImageGallery from "purecomponents/PureImageGallery";
import PureDraggable from "purecomponents/PureDraggableComponent/";

const Landing = () => {
  const dispatch = useDispatch();

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    dispatch({ type: MOCKUP_IMGS_FETCH });
  }, []);

  const modalType = useSelector((state) => {
    return state.appLevelReducer.modalType;
  });

  const openModalStatus = useSelector((state) => {
    return state.headerReducer.addNewCatModelOpenStatus;
  });

  const categoriesList = useSelector((state) => {
    return state.toDoListReducer.categories;
  });

  const modalComponents = {
    [MODAL_TYPES.ADD_NEW_CATEGORY_MENU]: <AddNewListMenu />,
  };

  const closeModal = () => {
    dispatch({ type: ADD_NEW_CATEGORY_BUTTON });
  };

  const currentDate = new Date().toLocaleDateString().split("/");
  return (
    <>
      <PureDraggable />
      <div
        style={{
          zIndex: -1,
          display: "grid",
          gridTemplateRows: "1fr 9fr",
          height: "97vh",
          overflow: "hidden",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <PureNavBar />
        </div>

        {/* <div
          style={{
            height: "calc(100vh - 70px)",
            overflowY: "auto",
            gridRow: "2/2",
          }}
        >
          <button
            id="click-me"
            onClick={(event) => {
              setIsVisible((prev) => !prev);
              event.stopPropagation();
            }}
          >
            Click me
          </button>
          <PureCalender
            isVisible={isVisible}
            elementPos={"#click-me"}
            setIsVisible={setIsVisible}
            currentDate={currentDate}
          />
        </div> */}
        {/* <div style={{}}>
          <PureImageGallery />
        </div> */}
      </div>
      {/* <UploadImage /> */}
      {/* <Scanner /> */}
    </>
  );
};

export default Landing;
