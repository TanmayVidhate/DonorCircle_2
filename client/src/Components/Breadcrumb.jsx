import { Link, useLocation } from "react-router-dom";

function Breadcrumb() {
  const {pathname} = useLocation();

  const pathnames = pathname.split("/").filter((path) => path);

  console.log("length====",pathnames.length)
  let breadcrumbPath =" "
  return (
    <nav className=" text-sm mt-16  bg-[#ffd6a5] ">
      {
        pathnames.length > 0  && <Link to="/showalluers" className="text-blue-600">Show All Users</Link>
      }
      
      {
        pathnames.map((page,index)=>{
          breadcrumbPath += `/${page}`;

          const  isLast = index === pathnames.length-1;

          return isLast ?  
          <span  key={breadcrumbPath} > > {page}</span> 
            : 
          <span key={breadcrumbPath} className="text-blue-600"> > <Link to={breadcrumbPath}>{page}</Link></span>
        })
      }
    </nav>
  );
}

export default Breadcrumb;
