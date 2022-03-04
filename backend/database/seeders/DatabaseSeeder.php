<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Artisan;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    { 
        DB::beginTransaction();  
            $this->clear();
            $this->migrate();     
            $this->insert_data();     
        DB::commit(); 
        // \App\Models\User::factory(10)->create();
    }
    private function clear()
    {
        Artisan::call('config:clear');
        
        //$this->clear_cache();
        $this->clear_db();
        
        echo 'Clear OK'."\n";
    }
    private function clear_cache()
    {
        $m = new Memcached();
        $m->addServer(env('MEMCACHED_HOST', 'localhost'), 11211);

        $m->flush();
    }
    private function clear_db()
    {
        DB::select('drop schema if exists public');
        DB::select('create schema public');
    }
    private function migrate()
    {
        $exitCode = Artisan::call('migrate');
        if($exitCode != 0)
        {
            echo 'Migrate Hata: ' .$exitCode."\n";
            exit(0);
        }
        else 
            echo 'Migrate OK'."\n";
    }
    private function insert_data()
    {
        echo 'Data Insert Started'."\n";
        require('data/index.php');
        echo 'Data Insert Finished'."\n";
    }
}
