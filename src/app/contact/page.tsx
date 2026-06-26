"use client";
import Nav from "@/components/Nav";
import Link from "next/link";
export default function ContactPage(){return(
<div>
<Nav/>
<div style={{minHeight:"100vh",backgroundColor:"#0a0a0a",color:"#e5e5e5"}}>
<div style={{maxWidth:600,margin:"0 auto",padding:"100px 24px 100px"}}>
<Link href="/" style={{color:"#c9a84c",textDecoration:"none",fontSize:15,display:"inline-flex",alignItems:"center",gap:6,marginBottom:24}}>{"\u2190 \u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"}</Link>
<h1 style={{fontSize:36,fontWeight:700,color:"#fff",marginBottom:16}}>{"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}</h1>
<p style={{color:"#888",fontSize:16,marginBottom:40,lineHeight:1.7}}>{"\u0421\u0432\u044f\u0436\u0438\u0442\u0435\u0441\u044c \u0441 \u043d\u0430\u043c\u0438 \u0434\u043b\u044f \u043e\u0431\u0441\u0443\u0436\u0434\u0435\u043d\u0438\u044f \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u0440\u043e\u0435\u043a\u0442\u0430 \u0438 \u0440\u0430\u0441\u0447\u0451\u0442\u0430 \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u0438."}</p>
<div style={{display:"flex",flexDirection:"column",gap:14}}>
<input placeholder={"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f"} style={{width:"100%",padding:"14px 16px",backgroundColor:"#111",border:"1px solid #333",borderRadius:10,color:"#fff",fontSize:15,outline:"none"}}/>
<input placeholder="Email" type="email" style={{width:"100%",padding:"14px 16px",backgroundColor:"#111",border:"1px solid #333",borderRadius:10,color:"#fff",fontSize:15,outline:"none"}}/>
<textarea placeholder={"\u0412\u0430\u0448\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"} rows={5} style={{width:"100%",padding:"14px 16px",backgroundColor:"#111",border:"1px solid #333",borderRadius:10,color:"#fff",fontSize:15,outline:"none",resize:"vertical",fontFamily:"inherit"}}/>
<button style={{width:"100%",padding:16,backgroundColor:"#c9a84c",color:"#0a0a0a",border:"none",borderRadius:10,fontWeight:"bold",fontSize:16,cursor:"pointer",letterSpacing:2}}>{"\u041e\u0422\u041f\u0420\u0410\u0412\u0418\u0422\u042c"}</button>
</div>
<div style={{marginTop:40,textAlign:"center"}}>
<a href="mailto:oba12@yandex.ru" style={{color:"#c9a84c",textDecoration:"none",fontSize:16}}>oba12@yandex.ru</a>
</div>
</div>
</div>
</div>)}
