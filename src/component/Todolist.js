
const Todolist = ({todItems}) => (
    <>
    <ul>
        {
            todItems.map((item,index) => (
              <li key={index}>{item}</li>  
            ))
        }
    </ul>
    </>
 
);

export default Todolist;
