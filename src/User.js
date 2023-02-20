
 export const User = (props) =>
{
  return (
    <div class="col-4">
        <div class="card-body">
          <h5 class="card-title">{props.name}</h5>
          <p class="card-text">{props.email}</p>
          <a class="btn btn-primary">{props.age}</a>
        </div>
    </div>
  );
}

