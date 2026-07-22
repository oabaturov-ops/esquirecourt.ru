"use client";
import Link from "next/link";
import{useState}from"react";
export default function Nav(){
var o=useState(false),open=o[0],setOpen=o[1];
var links=[
{href:"/",label:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"},
{href:"/services",label:"\u0423\u0441\u043b\u0443\u0433\u0438"},
{href:"/about",label:"\u041e \u043d\u0430\u0441"},
{href:"/library",label:"\u041d\u043e\u0440\u043c\u0430\u0442\u0438\u0432"},
{href:"/contacts",label:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}
];
return(
<nav style={{position:"fixed",top:0,left:0,right:0,zIndex:1000,backgroundColor:"rgba(10,10,10,0.92)",backdropFilter:"blur(12px)",borderBottom:"1px solid #1a1a1a",padding:"0 24px"}}>
<div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
<Link href="/" style={{fontSize:20,fontWeight:700,color:"#c9a84c",textDecoration:"none"}}><span style={{color:"#fff"}}>Esquire</span>Ing.</Link>
<div style={{display:"flex",gap:32,alignItems:"center"}}>
{links.map(function(l){return(
<Link key={l.href} href={l.href} style={{color:"#a3a3a3",textDecoration:"none",fontSize:15,transition:"color 0.2s"}}
onMouseEnter={function(e){e.currentTarget.style.color="#c9a84c"}}
onMouseLeave={function(e){e.currentTarget.style.color="#a3a3a3"}}>
{l.label}
</Link>)})}
</div>
<button onClick={function(){setOpen(!open)}} style={{display:"none",background:"none",border:"none",color:"#e5e5e5",fontSize:24,cursor:"pointer"}}>{open?"\u2715":"\u2630"}</button>
</div>
</nav>)}
