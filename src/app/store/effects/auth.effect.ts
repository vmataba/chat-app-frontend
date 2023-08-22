import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthService } from "src/app/services/auth.service";
import { AuthActionType, loginFail, loginSuccess, logoutFail, logoutSuccess, signupFail, signupSuccess } from "../actions/auth.action";
import { catchError, map, mergeMap, of } from "rxjs";

@Injectable()
export class AuthEffect{

    constructor(private actions$: Actions,private authService: AuthService){}


    signup$ = createEffect(() => this.actions$.pipe(
      ofType(AuthActionType.SIGNUP),
      mergeMap((action: any) => this.authService.signup(action.user).pipe(
          map(user => signupSuccess({user})),
          catchError(response => {
            return of(signupFail({error:response}))
          })
        )
      )
    ))

    login$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActionType.LOGIN),
        mergeMap((action: any) => this.authService.login(action.credentials).pipe(
            map(user => loginSuccess({user})),
            catchError(response => {
              return of(loginFail({error:response.error}))
            })
          )
        )
      ))

      logout$ = createEffect(() => this.actions$.pipe(
        ofType(AuthActionType.LOGOUT),
        mergeMap((action: any) => this.authService.logout().pipe(
            map(loggedOut => logoutSuccess({loggedOut})),
            catchError(response => {
              return of(logoutFail({error:response.error}))
            })
          )
        )
      ))
}