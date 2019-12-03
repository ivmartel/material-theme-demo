import { Component, HostBinding } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import { FormControl, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatSnackBar } from '@angular/material/snack-bar';

/**
 * AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'material-theme-demo';

  sidenavOpened = true;

  inputFormControl = new FormControl('', [
    Validators.required
  ]);

  @HostBinding('class') componentCssClass;

  themes: string[] = [
    'theme-grey-blue',
    'theme-blue-grey',
    'theme-deeppurple-amber',
    'theme-indigo-pink',
    'theme-pink-bluegrey',
    'theme-purple-green',
  ];

  constructor(
    public overlayContainer: OverlayContainer,
    private bottomSheet: MatBottomSheet,
    private snackBar: MatSnackBar) {
      this.onSetTheme(this.themes[0]);
    }

  onSetTheme(theme: string) {
    this.overlayContainer.getContainerElement().classList.add(theme);
    this.componentCssClass = theme;
  }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000
    });
  }

}

/**
 * @title Bottom Sheet Overview
 */
@Component({
  selector: 'app-bottom-sheet',
  template: '<p>Hola bottom sheet!</p>'
})
export class BottomSheetComponent {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}

/**
 * @title Snack Bar
 */
@Component({
  selector: 'app-snack-bar',
  template: '<p>Hola snack bar!</p>'
})
export class SnackBarComponent {}
