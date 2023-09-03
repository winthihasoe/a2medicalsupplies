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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();
            $table->foreignId('user_id')->constrained()->onDelete('cascade');
            $table->unsignedInteger('total_amount');
            $table->unsignedInteger('delivery_fee')->nullable();
            $table->string('status')->default('pending');
            $table->text('address')->nullable();
            $table->foreignId('address_id')->nullable()->constrained()->onDelete('set null'); // The address added by users can't be deleted.
            $table->string('payment_method')->nullable();
            $table->string('payment_status')->nullable();
            $table->string('promo_code')->nullable();
            $table->string('discount_amount')->nullable();
            $table->text('remark_by_admin')->nullable();
            $table->text('remark_by_customer')->nullable();
            $table->text('review_by_customer')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
