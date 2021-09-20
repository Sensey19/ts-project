export default ({ $axios, redirect }) => {
  $axios.onResponseError((error) => {
    console.dir(error);
  });

  $axios.onError((error) => {
    const code = parseInt(error.response && error.response.status);
    if (code === 500) redirect('/500');
  });
};
