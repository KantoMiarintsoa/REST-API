<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\UserService;


class USerController extends Controller
{
    protected $userService;

    public function __construct()
    {
        $this->userService = new UserService();
    }

    public function register(Request $request)
    {
        $result = $this->userService->register($request->all());

        if (isset($result['error'])) {
            return response()->json($result, 400);
        }

        return response()->json($result, 201);
    }

    public function updateUser(Request $request, $id)
    {
        $result = $this->userService->editUser($id, $request->all());
        if (isset($result['error'])) {
            return  response()->json($result, 400);
        }
        return response()->json($result, 200);
    }

    public function deleteUser($id)
    {
        $result = $this->userService->deleteUSer($id);

        if (isset($result['error'])) {
            return response()->json($result, 404);
        };

        return response()->json($result, 200);
    }

    public function getUSer($id)
    {
        $result = $this->userService->getData($id);

        if (isset($result['error'])) {
            return response()->json($result, 404);
        };

        return response()->json($result, 200);
    }
}
