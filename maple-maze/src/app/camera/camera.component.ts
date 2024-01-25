// camera.component.ts

import { Component } from '@angular/core';
import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss']
})
export class CameraComponent {
  imageUrl: string | undefined; // Variable zum Speichern der Bild-URL

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri
      });

      // image.webPath wird einen Pfad enthalten, der als Bild-Quelle festgelegt werden kann.
      // Sie können auf die Originaldatei über image.path zugreifen, die an die Filesystem-API
      // übergeben werden kann, um die Rohdaten des Bildes zu lesen, wenn gewünscht
      // (oder resultType: CameraResultType.Base64 an getPhoto übergeben, um die Base64-Codierung zu erhalten).
      this.imageUrl = image.webPath;
    } catch (error) {
      console.error('Fehler beim Aufnehmen des Bildes:', error);
    }
  }
}
