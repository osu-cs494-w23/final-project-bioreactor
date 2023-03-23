import React, {useState, useEffect} from "react";
import {FaSearch} from "react-icons/fa";
import {useDispatch, useSelector} from "react-redux";
import {selectRecipe} from "../redux/actions";
import {socket} from "../context/socket";
import {getRecipeList} from "../redux/selectors";

const Sidebar = ({onClickHandler, recipes, socket}) => {
    const dispatch = useDispatch();
    const recipeList = useSelector(getRecipeList)
    const [result, setResult] = useState([])
    const [filterText, setFilterText] = useState("")
    // const [initialData, setInitialData] = useState([])

    useEffect(()=>{
        let recipeListToValues = Object.values(recipeList)
        setResult(recipeListToValues)
        if (filterText === "") {
            setResult(recipeListToValues)
            return
        }
        setResult(recipeListToValues.filter(data => data.name.toLowerCase().includes(filterText)))
    }, [filterText, recipeList])

    // useEffect(()=>{
    //     console.log("usingEffect")
    //     let interval = setInterval(()=>{
    //         if(socket !== undefined) {
    //             socket.emit("getRecipeList", (data) => {
    //                 console.log("recipeList returned:", data)
    //                 if (data["status"] === "error") {
    //                     console.log("getManual error:", data["errorMessage"])
    //                     return
    //                 }
    //                 if (data["list"] === {}) {
    //                     setInitialData([])
    //                 } else {
    //                     console.log("setting that data")
    //                     setInitialData(Object.values(data["list"]))
    //                 }
    //             })
    //         }
    //     })
    // }, [])

    // useEffect(()=>{
    //     console.log("usingEffect")
    //     if(socket !== undefined) {
    //         socket.emit("getRecipeList", (data) => {
    //             if (data["status"] === "error") {
    //                 console.log("getManual error:", data["errorMessage"])
    //                 return
    //             }
    //             if (data["list"] === {}) {
    //                 setInitialData([])
    //             } else {
    //                 setInitialData(Object.values(data["list"]))
    //                 //setResult(initialData)
    //             }
    //         })
    //     }
    // }, [initialData])

    const onChangeHandler = (e) => {
        console.log("onChange")
        e.preventDefault()
        setFilterText(e.target.value.toLowerCase())
    }

    return (
        <div className="sidebar">
            <div className="bold list-header">Recipe List</div>

            <div className="search">
                <input
                    className="searchbox"
                    placeholder="Search recipes..."
                    type="text"
                    value={filterText}
                    onChange={onChangeHandler}
                />
                <button className="searchbutton">
                    <FaSearch/>
                </button>
            </div>
            <div className="recipe-list">
                {!(Object.keys(result).length === 0) && (result.map((data) => {
                        return (
                            <li key={data.name}>
                                <button
                                    className="recipe-link"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        dispatch(selectRecipe(data));
                                    }}
                                >
                                    {data.name}
                                </button>
                            </li>
                        );
                    }))}

            </div>
            <button className="add-button" onClick={onClickHandler}>
                + Add Recipe
            </button>
        </div>
    );
};

export default Sidebar;
