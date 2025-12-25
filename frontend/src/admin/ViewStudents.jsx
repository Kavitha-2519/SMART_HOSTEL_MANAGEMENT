import AdminSidebar from "../components/AdminSidebar";

const ViewStudents = () => {
  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar />

      <div style={{ marginLeft: "240px", padding: "40px" }}>
        <h2>Students List</h2>

        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Room</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Student One</td>
              <td>student@test.com</td>
              <td>A101</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewStudents;
