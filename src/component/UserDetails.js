import data from "../Constant";

const UserDetails = () => (
  <>
  <div>
    <h2>TODO List</h2>
    <button>Craete ToDos</button>
    <table className="table-data">
        {
            data.map(x=> (
            <tr>
                <td>{x.id}</td>
                <td>{x.fname}</td>
                <td>{x.lanme}</td>
                <td>{x.city}</td>
                <td>{x.age}</td>
            </tr>
            ))
        }
    </table>
  </div>
  </>
);

export default Todolist;
