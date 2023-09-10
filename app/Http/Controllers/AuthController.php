<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    //Register function
    public function register(Request $request)
    {
      
      $validate = Validator::make($request->all(), [
        'name' => 'required|string',
        'email'=> 'required|string|unique:users,email',
        'password'=> 'required|string|confirmed|min:6'
      ]); 

      if($validate->fails()){
        return response()->json([
            'validation_errors' => $validate->messages()
        ]);
      }else{
        $user = User::create([
            'name'=>$request->name,
            'email'=>$request->email,
            'password'=>bcrypt($request->password),
        ]);

        $token = $user->createToken($user->email.'_Token')->plainTextToken;

        $response = [
          'user' => $user,
          'token' => $token,
          'status' => 201,
          'message' => "Register successful"
        ];

        return response($response);
      }  
    }

    
    //Login function

    public function login(Request $request)
    {
        $validate = Validator::make($request->all(), [
            'email' => 'required|email',
            'password' => 'required',
            'device_name' => 'required',
        ]);

        if($validate->fails()){
            return response()->json([
                'validation_errors' => $validate->messages()
            ]);
        }else{
            $user = User::where('email', $request->email)->first();
     
            if (! $user || ! Hash::check($request->password, $user->password)) {
                return response()->json([
                    'status' => 401,
                    'message'=> 'Invalid credentials',
                ]);
            }else{
                $token = $user->createToken($user->email.'_Token')->plainTextToken;
    
                return response()->json([
                    'token'=>$token,
                    'status'=>200,
                    'user'=>$user->only('id', 'name', 'email'),
                    'message' => "Login successful"
                ]);
            }
        }  
    }

    //Logout and destroy token
    public function logout(Request $request)
    {
        auth()->user()->tokens()->delete();       
        return response()->json(
            ['message'=>'Logout Successful', 'status'=>200] , 200);
    } 
}
