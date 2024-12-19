import {supabase} from './client'


export async function getStudentsData() {
  const { data, error } = await supabase.from('Students').select("*");
  console.log(data);
  

  if (error) {
    console.log(error);
    return {
      props: {
        students: [],
        error: error.message,
      }
    };
  }

  return {
    props: {
      students: data,
    }
  }
}
