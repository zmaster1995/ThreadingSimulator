import { Component, OnInit, Input, ElementRef, ViewChild, Renderer } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'refresh-button',
  templateUrl: './refresh-button.component.html',
  styleUrls: ['./refresh-button.component.css']
})
export class RefreshButtonComponent implements OnInit {

  private Enabled: boolean = true;
  private RefreshInterval: number = 100;
  @Input("isEnabled") IsEnabled: any;
  @Input("img") Img: string;
  @Input("text") Text: string;
  @Input("size") Size: string;
  @ViewChild("imgBtn", { read: ElementRef }) Button: ElementRef;
  @ViewChild("text", { read: ElementRef }) Txt: ElementRef;

  constructor(private Element: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    if(!isNullOrUndefined(this.IsEnabled))
    {
      setInterval(this.Check.bind(this), this.RefreshInterval);
    }

    if(!isNullOrUndefined(this.Size))
    {
      this.renderer.setElementStyle(this.Button.nativeElement, "font-size", this.Size+"px");
    }
  }

  private Check() {
    try
    {
      let newStatus: boolean = this.IsEnabled();

      if(newStatus != this.Enabled)
      {
        this.Enabled = newStatus;

        if(newStatus)
        {
          this.renderer.setElementStyle(this.Element.nativeElement, "pointer-events", "inherit");
          this.renderer.setElementStyle(this.Button.nativeElement, "opacity", "1");
          this.renderer.setElementStyle(this.Button.nativeElement, "cursor", "pointer");

          if(this.Txt != null)
          {           
            this.renderer.setElementStyle(this.Txt.nativeElement, "opacity", "1");
            this.renderer.setElementStyle(this.Txt.nativeElement, "cursor", "pointer");
          }
        }
        else
        {
          
          this.renderer.setElementStyle(this.Element.nativeElement, "pointer-events", "none");
          this.renderer.setElementStyle(this.Button.nativeElement, "opacity", "0.2");
          this.renderer.setElementStyle(this.Button.nativeElement, "cursor", "not-allowed");

          if(this.Txt != null)
          {
            this.renderer.setElementStyle(this.Txt.nativeElement, "opacity", "0.2");
            this.renderer.setElementStyle(this.Txt.nativeElement, "cursor", "not-allowed");
          }
        }
      }
    }
    catch(Err){}
  }
}
