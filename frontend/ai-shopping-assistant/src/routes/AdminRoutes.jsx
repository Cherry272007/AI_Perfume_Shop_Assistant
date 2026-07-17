import { Route } from "react-router-dom";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/admin/Dashboard";
import Products from "../pages/admin/Products";
import Categories from "../pages/admin/Categories";

const AdminRoutes = (
    <Route path="/admin" element={<AdminLayout/>}>
        <Route index element={<Dashboard/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/add" element={<AddProduct/>}/>
        <Route path="/products/edit/:id" element={<EditProduct/>}/>
        <Route path="/categories" element={<Categories/>}/>
        <Route path="/customers" element={</>}/>
    </Route>
);
export default AdminRoutes;
