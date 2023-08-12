import "../CSS/Dashboard.css"
import { Link } from "react-router-dom";

function CreateRole(){
    return(
        <>
        <div className="container-fluid">
            <div className="row">
                
                <div className="col-md-12">
                    
                    <section className="mid">
                    <div className="row" >
                        <div className="col-md-12"><h2 
                        style={{fontWeight:'bold'}}>Roles</h2></div><br/><br/>
                        <nav aria-label="breadcrumb">
                        <ol class="breadcrumb" >
                            <li class="breadcrumb-item"><Link to="//" style={{textDecoration:'none',color:'#656871'}}>DashBoard</Link></li>
                            <li class="breadcrumb-item"><Link to="//" style={{textDecoration:'none',color:'#656871'}}>Roles</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">Create Role</li>
                        </ol>
                        </nav>
                    </div>
                    <div className="row" style={{position:'relative'}}>
                        <div className="col-md-2"><h4 
                        style={{fontWeight:'bold'}}>Create Role</h4></div>
                        <div className="col-md-8"></div>
                        <div className="col-md-2"><button type="submit" className="btn btn-primary">Save & Next</button></div>
                    </div>
                    <div className="row">
                        
                        <div className="col-md-12" 
                        style={{fontWeight:'bold'}}>
                        <br/><h6>Role Name</h6><br/>
                        <input type='text' placeholder='Enter Role Name' className="form-control" 
                        style={{ background:'#F5F5F5', padding:'15px'}}/>
                        <br/><h6>Slug</h6><br/>
                        <input type='text' placeholder='Role Slug' className="form-control" 
                        style={{ background:'#F5F5F5', padding:'15px'}}/>
                        <h6 >Unique name for the role all in lowercase</h6><br/>
                        <h6>Description</h6><br/>
                        <textarea placeholder='Description about the role' className="form-control" 
                        style={{ height:'130px', background:'#F5F5F5', padding:'15px'}}/>
                        
                        <br/><h4>Select Permissions</h4><br/>
                        <table className="table table-hover">
                        <tr>
                            <th>Permission Name</th>
                            <th>View</th>
                            <th>Create</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                <tr style={{height:'70px'}}>
                    <td>User</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
                <tr style={{height:'70px'}}>
                    <td style={{fontWeight:'bold'}}>Role</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
                <tr style={{height:'70px'}}>
                    <td style={{fontWeight:'bold'}}>Courses</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
                <tr style={{height:'70px'}}>
                    <td style={{fontWeight:'bold'}}>Test</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
                <tr style={{height:'70px'}}>
                    <td style={{fontWeight:'bold'}}>Question and Answer</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
                <tr style={{height:'70px'}}>
                    <td style={{fontWeight:'bold'}}>Notification</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
                <tr style={{height:'70px'}}>
                    <td style={{fontWeight:'bold'}}>Current affairs and Daily News</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
                <tr style={{height:'70px'}}>
                    <td style={{fontWeight:'bold'}}>Banner</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
                <tr style={{height:'70px'}}>
                    <td style={{fontWeight:'bold'}}>Competition</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
                <tr style={{height:'70px'}}>
                    <td style={{fontWeight:'bold'}}>CV Support</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
                <tr style={{height:'70px'}}>
                    <td style={{fontWeight:'bold'}}>Project Support</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
                <tr style={{height:'70px'}}>
                    <td style={{fontWeight:'bold'}}>Career Support</td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                    <td><input type='checkbox'/></td>
                </tr>
            </table>
                        </div>
                    </div>

                    </section>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default CreateRole;