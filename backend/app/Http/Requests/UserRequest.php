<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            // 'name' => [
            //     'required' //, 'min:3'
            // ],
            'email' => [
                'required' //, 'email', Rule::unique((new User)->getTable())->ignore($this->route()->user->id ?? null)
            ],
            'password' => [
                'required'//$this->route()->user ? 'required_with:password_confirmation' : 'required', 'nullable', 'confirmed', 'min:6'
            ],
        ];
    }
    public function messages()
    {

        return [
           'required' => 'The :attribute field is required.',
            'email.required' => 'A email is required',
            'password.required' => 'A password is required',
        ];

    }
    public function attributes()
    {
        return [
            'email' => 'e-mail',
            'password' => 'şifre',
        ];
    }
}
