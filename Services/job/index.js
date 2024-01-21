
import Cookies from "js-cookie";

// post job api

export const post_job = async (formData) => {
    console.log(`Bearer ${Cookies.get('token')}`);
    console.log("sec="+ process.env.JWT_SECRET)

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/postAJob`, {
            
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Cookies.get('token')}`
            },
            body: JSON.stringify(formData),
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in post job (service) => ', error);
    }
}


// get job api
export const get_job = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/getAllJobs`, {
            method: 'GET',
            headers : {
                'Authorization': `Bearer ${Cookies.get('token')}`
            }
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in getting job (service) => ', error);
    }
}

// get specified job api
export const get_specified_job = async (id) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/getSpecifiedJob?id=${id}`, {
            method: 'GET',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`}
        })
        const data = res.json();
        return data;
    } catch (error) {
        console.log('error in getting  specified job (service) => ', error);
    }
}



// apply  job api

export const apply_job = async (formData) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/job/applyJob`, {
            method: 'POST',
            headers : {'Authorization': `Bearer ${Cookies.get('token')}`},
            body: formData,
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log('error in apply job (service) => ', error);
    }
}

 
 

 