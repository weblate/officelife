<?php

namespace App\Models\Company;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CompanyInvoice extends Model
{
    use HasFactory;

    protected $table = 'company_invoices';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'company_id',
        'company_usage_history_id',
        'sent_to_payment_processor',
        'receipt_sent_to_customer',
        'email_address_invoice_sent_to',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'sent_to_payment_processor' => 'boolean',
        'receipt_sent_to_customer' => 'boolean',
    ];

    /**
     * Get the Company record associated with the company invoice object.
     *
     * @return BelongsTo
     */
    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    /**
     * Get the Company usage history record associated with the company invoice
     * object.
     *
     * @return BelongsTo
     */
    public function companyUsageHistory()
    {
        return $this->belongsTo(CompanyUsageHistory::class, 'company_usage_history_id');
    }
}