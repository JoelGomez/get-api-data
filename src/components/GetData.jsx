import Swal from "sweetalert2"
import { useState } from "react"
import { DataTable } from "./DataTable"

export const GetData = () => {

    const animatedButtonHandler = () => {
        Swal.fire({
            title: "Descargar datos?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Get data",
            denyButtonText: `Don't get data`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                setShowDataTable(true)
              Swal.fire("Downloaded!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Data didn't downloaded", "", "error");
            }
          });
    }

    const [ShowDataTable, setShowDataTable] = useState(false)
   

    return (
        <div className="ui container">
            <h2>Get Data</h2>
            <div className="ui vertical animated button fluid" onClick={animatedButtonHandler} >
                <div className="hidden content">Get data</div>
                <div className="visible content">
                    <i className="download icon"></i>
                </div>
            </div>
            {ShowDataTable && <DataTable />}
        </div>
    )
}
