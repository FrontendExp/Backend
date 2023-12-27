
// exports.usercheck = (req,res,next)=>{


// 	if(!req.query.price){
// 		return res.send('failed')
// 	}
// 	next();
// }



// exports.checkcredential = (req,res,next) =>{
//     console.log(req.body);
//     if(!req.body.username){

//         res.send('please enter username')
//     }

//     if(!req.body.password){

//         res.send('please enter password')
//     }

    

    
//   next();


// }



// exports.entrycheck = (req,res,next)=>{

//     if(!req.query.entry){
//         res.send('check correct')
//     }

// 	next();
//      }

// exports.usercheck = (req,res,next)=>{

//     if(!req.query.user){
//         res.send('check correct')
//     }

// 	next();
//    {{  }




// for reference in postman mention the first key as username and value for username 
//same goes for passwo

     exports.logincheck = (req,res,next)=>{

        console.log(req.query.username)
        if(!req.query.username){

            res.send({msg:'please send username'})
        }else if(!req.query.password){
            res.send({msg:'please send password     '})
        }else{
            next();
        }
     }

     exports.admincheck=(req,res,next)=>{
        if(!req.query.username){
            res.send('please enter username')
        }
        else if(!req.query.password){
            res.send('please enter password')
        }
        else{
            next();
        }
     }