import Menu from "../components/Menu";
import TaskList from "../features/TaskList";


function MainLayout({ children }) {
    return (
        <>
        {/* <Menu /> */}
        <main><TaskList/></main>
        {/* <Menu type="_task" /> */}
        </>
    )
}

export default MainLayout