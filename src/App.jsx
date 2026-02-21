// // // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // // import MainLayout from "./layout/MainLayout";
// // // import Dashboard from "./pages/Dashboard";

// // // export default function App() {
// // //   return (
// // //     <BrowserRouter>
// // //       <Routes>
// // //         <Route element={<MainLayout />}>
// // //           <Route path="/" element={<Dashboard />} />
// // //         </Route>
// // //       </Routes>
// // //     </BrowserRouter>
// // //   );
// // // }
// // import { BrowserRouter, Routes, Route } from "react-router-dom";
// // import MainLayout from "./layout/MainLayout";
// // import Dashboard from "./pages/Dashboard";

// // export default function App() {
// //   return (
// //     <BrowserRouter>
// //       <Routes>

// //         <Route element={<MainLayout />}>
// //           <Route path="/" element={<Dashboard />} />
// //         </Route>

// //       </Routes>
// //     </BrowserRouter>
// //   );
// // }
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MainLayout from "./layout/MainLayout";
// import Dashboard from "./pages/Dashboard";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import AdminDashboard from "./pages/AdminDashboard";

// import ProtectedRoute from "./routes/ProtectedRoute";
// import RoleRoute from "./routes/RoleRoute";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>

//         {/* PUBLIC ROUTES */}
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />

//         {/* USER DASHBOARD */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <MainLayout />
//             </ProtectedRoute>
//           }
//         >
//           <Route index element={<Dashboard />} />
//         </Route>

//         {/* ADMIN PANEL */}
//         <Route
//           path="/admin"
//           element={
//             <RoleRoute role="admin">
//               <AdminDashboard />
//             </RoleRoute>
//           }
//         />

//       </Routes>
//     </BrowserRouter>
//   );
// }
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";

import MainLayout from "./layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./routes/ProtectedRoute";
import RoleRoute from "./routes/RoleRoute";

function RootRedirect() {
  const { user } = useAuth();
  return <Navigate to={user ? "/dashboard" : "/login"} />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>

          {/* default route */}
          <Route path="/" element={<RootRedirect />} />

          {/* public */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* dashboard */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
          </Route>

          {/* admin */}
          <Route
            path="/admin"
            element={
              <RoleRoute role="admin">
                <AdminDashboard />
              </RoleRoute>
            }
          />

        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}