<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('user_details', function (Blueprint $table) {
            $table->id();
            $table->string('nisn');
            $table->string('phone');
            $table->string('gender');
            $table->date('birth_date');
            $table->string('birth_place');
            $table->text('address');
            $table->string('city');
            $table->string('province');
            $table->string('district');
            $table->string('village');
            $table->string('school');
            $table->integer('status')->default(0);
            $table->integer('tahap')->default(1);
            $table->string('photo')->nullable();
            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_details');
    }
};
