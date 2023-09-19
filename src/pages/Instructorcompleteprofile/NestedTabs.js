import React, { useState } from "react";
import {
    Col,
    Nav,
    NavItem,
    NavLink,
    Row,
    Tab,
    TabContainer,
    TabContent,
    TabPane,
    Tabs,
} from "react-bootstrap";
import { days } from "./NestedDays";

const NestedTabs = () => {
    const [active, setActive] = useState("Morning");
    const [state, setState] = useState([]);

    const handleDaysSelect = (day) => {
        setState((prevState) => (
            [...[{ day }]]
        ))
    }

    const handleShift = (shift) => {
        setActive(shift);
    }

    return (
        <div>
            <TabContainer defaultActiveKey="monday" onSelect={handleDaysSelect}>
                <div className="row">
                    <div className="col-12">
                        <Nav variant="pills">
                            {days.map((ele1, index) => (
                                <NavItem>
                                    <NavLink eventKey={ele1?.name}>{ele1?.title}</NavLink>
                                </NavItem>
                            ))}
                        </Nav>
                    </div>
                    <div className="col-12">
                        <TabContent>
                            {days.map((ele1, index) =>
                                ele1?.shifts?.map((ele2, index) => (
                                    <TabPane eventKey={ele1?.name}>
                                        <Tabs
                                            activeKey={active}
                                            transition={false}
                                            onSelect={(e) => handleShift(e)}
                                        >
                                            <Tab eventKey={ele2?.shift_name}
                                                title={
                                                    <>
                                                        <p>{ele2?.shift_name}</p>
                                                        <span>{ele2.shift_time}</span>
                                                    </>
                                                }
                                            >
                                                {ele2?.slots?.map((ele3, index) => (
                                                    <div style={{ display: "flex" }}>
                                                        <input type="checkbox"></input>
                                                        <label>{ele3?.slot_name}</label>
                                                    </div>
                                                ))}
                                            </Tab>
                                        </Tabs>
                                    </TabPane>
                                ))
                            )}
                        </TabContent>
                    </div>
                </div>
            </TabContainer>
        </div>
    );
};

export default NestedTabs;