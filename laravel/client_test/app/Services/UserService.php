<?php

namespace App\Services;

use Illuminate\Support\Facades\Validator;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UserService
{
    public function register(array $data)
    {
        $validator = Validator::make($data, [
            'name' => 'required| string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required',
        ]);

        if ($validator->fails()) {
            return ['error' => $validator->errors()];
        }

        $user = User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);

        return ['user' => $user, 'message' => 'Inscription réussie'];
    }

    public function editUser($id, array $data)
    {
        $user = User::find($id);

        if (!$user) {
            return ['error' => 'user not found'];
        }

        if (isset($data["password"])) {
            $data["password"] = Hash::make($data["password"]);
        }

        $user->update($data);

        return $data;
    }

    public function deleteUSer($id)
    {
        $user = User::find($id);

        if (!$user) {
            return ['error' => 'user not found'];
        }
        $user->delete();

        return ['success' => 'user deleted'];
    }

    public function getData($id)
    {
        $user = User::find($id);

        if (!$user) {
            return ['error' => 'user not found'];
        }
        return [
            'user' => $user->get()
        ];
    }
}
