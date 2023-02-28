import { useForm }from "react-hook-form"
import * as yup from "yup";
import { yupResolver} from "@hookform/resolvers/yup";

export const ContactForm = () => {

    //THIS IS THE TEMPLATE OR INPUT VALIDATION
    const schema = yup.object().shape({
        name: yup.string().required("Name is required."),
        email : yup.string().email().required(),
        age : yup.number().positive().integer().min(18, "Should be above or equal to 18").required(),
        password: yup.string().min(8).max(25).required(),
        confirmPassword : yup.string().oneOf([yup.ref("password") , null]).required()
    });

    const {register, handleSubmit, formState : {errors}} = useForm(
        {
             resolver: yupResolver(schema)
        }
    );
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="form-control" type="text" placeholder="Name..." {...register("name")} /> <br></br>
                <span className="text-danger">{errors.name?.message}</span>

                <input className="form-control" type="text" placeholder="Email..." {...register("email")}/> <br></br>

                <input className="form-control" type="number" placeholder="Age..." {...register("age")}/> <br></br>
                <span className="text-danger">{errors.age?.message}</span>

                <input className="form-control" type="password" placeholder="Password..." {...register("password")}/> <br></br>

                <input className="form-control" type="password" placeholder="Confirm Password..." {...register("confirmPassword")}/><br></br>
                <input className="btn btn-primary" type="submit" value="SUBMIT"/>
            </form>

           
        </div>
    );
};