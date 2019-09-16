<?php

namespace App\Http\Middleware;

use Closure;
use App\Helpers\InstanceHelper;

class CheckHRRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $employee = InstanceHelper::getLoggedEmployee();

        if ($employee->permission_level <= config('homas.authorizations.hr')) {
            return $next($request);
        }

        abort(401);
    }
}