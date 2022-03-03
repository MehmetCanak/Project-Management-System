<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Foundation\rules\ValidateRule;
use Illuminate\Support\Str;


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
            'email' => 'required|email ', //|unique:users',
           // 'name' => 'required|string|max:50',
            'password' => 'required'
        ];
    }

    public function messages()
    {
        return [
            'required' => ':attribute bos olamaz!',
            'email' => ':attribute gecerli bir email adresi olmalidir!',
            //'name.required' => 'Name is required!',
            'password.required' => 'Password is required!'
        ];
    }

    /**
     *  Filters to be applied to the input.
     *
     * @return array
     */
    public function filters()
    {
        return [
            'email' => 'trim|lowercase',
            //'name' => 'trim|capitalize|escape'
        ];
    }
    public function attributes()
    {
        return [
            'email' => 'e-mail',
            'password' => 'şifre',
        ];
    }
    protected function prepareForValidation()
    {
        if($this->password == 'aa'){
            $this->merge([
                'password' => bcrypt(Str::random(8))
            ]);
        }else{
            $this->merge([
                // 'email' => Str::slug($this->slug),
                 'password' => clear_string($this->password),
             ]);
        }
        
    }
    // public function withValidator($validator)
    // {
    //     // checks user current password
    //     // before making changes
    //     $validator->after(function ($validator) {
    //         if ( !Hash::check($this->current_password, $this->user()->password) ) {
    //             $validator->errors()->add('current_password', 'Your current password is incorrect.');
    //         }
    //     });
    //     return;
    // }
}
