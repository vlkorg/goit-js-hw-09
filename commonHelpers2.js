import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a=document.querySelector(".feedback-form"),o=document.querySelector('[name="email"]'),m=document.querySelector('[name="message"]'),e={email:"",message:""},s=()=>{JSON.parse(localStorage.getItem("feedback-form-state")),o.value=e.email||"",m.value=e.message||""};localStorage.length!==0&&s();const l=()=>{const t=JSON.stringify(e);localStorage.setItem("feedback-form-state",t)},r=t=>{t.target===o?e.email=t.target.value.trim():e.message=t.target.value.trim(),l()},c=t=>{if(t.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),e.email="",e.message="",localStorage.removeItem("feedback-form-state"),a.reset()};a.addEventListener("input",r);a.addEventListener("submit",c);
//# sourceMappingURL=commonHelpers2.js.map
