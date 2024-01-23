import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { allUserAsync } from '../../store/login/loginSlice'
import DataTable from 'react-data-table-component'

export default function AllUsers() {

  const dispatch = useDispatch()

  const {allUser} = useSelector((state:any)=>state.login)

  const columns = [
    {
      name: "Name",
      selector: (row:any) => row?.name 
    },
    {
      name: "Email",
      selector: (row:any) => row?.email
    },
    {
      name: "Phone",
      selector: (row:any) => row?.phone
    },
  ];

  console.log(allUser?.data ,"allUserallUser")

  useEffect(()=>{
    dispatch(allUserAsync ())
  },[])

  return (
    <div>
      <div className="container px-0 my-4 shadow-lg  rounded">
        <DataTable columns={columns} data={allUser?.data} />
      </div>
    </div>
  )
}
