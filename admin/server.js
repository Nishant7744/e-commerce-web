
const http =reqiure('http');
const express=require('express')
const server= http.createServer((req,res)=>
{
    res.write(200,{'content-type':'text/plain'});

    res.end('hello world');
});

const port=3000;

server.listen(port,()=>{
    console.log("server running on port 3000");
});