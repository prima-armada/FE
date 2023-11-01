
import { DepartProvider } from "../../component/context/Contextprovid"
import ContentDepartment from "../../component/department/content/Content"
import NavsApp from '../../component/navapp/navapp'
// import {DepartProvider} from "../../component/context/Contextprovid"

function Department() {

    return (
   <>
         
          <DepartProvider>
          <NavsApp/>
          <ContentDepartment/>
         </DepartProvider>
   </>
        
     
      
    )
  }

  
export default Department