import React from "react";
import "./workList.scss";
import { data } from "../../../data";
import Button from "../button/Button";
import { motion } from "framer-motion";

const WorkList = () => {
  return (
    <div className="work-list">
      {data?.map((item, index) => {
        return (
          <div
            key={index}
            className={`page ${
              index === 0 ? "page1" : index === 1 ? "page2" : "page3"
            }`}
          >
            {index === 0 ? (
              <>
                <motion.div
                  className="left"
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h3>{item?.title}</h3>
                  <h5>{item?.sub_title}</h5>
                  <div className="tags">
                    {item?.tags?.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <p>{item?.para}</p>
                  <Button className="work-list__btn">
                    See full case study &rarr;
                  </Button>
                </motion.div>
                <motion.div
                  className="right"
                  initial={{ x: 500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <img src={item?.image} alt="" />
                </motion.div>
              </>
            ) : (
              <>
                <motion.div
                  className="left"
                  initial={{ x: -500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <img src={item?.image} alt="" />
                </motion.div>
                <motion.div
                  className="right"
                  initial={{ x: 500 }}
                  animate={{ x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <h3>{item?.title}</h3>
                  <h5>{item?.sub_title}</h5>
                  <div className="tags">
                    {item?.tags?.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <p>{item?.para}</p>
                  <Button className="work-list__btn">
                    See full case study &rarr;
                  </Button>
                </motion.div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default WorkList;
