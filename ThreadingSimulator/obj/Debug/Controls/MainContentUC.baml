   M S B A M L   `   `   `  ����M  IThreadingSimulator, Version=1.0.0.0, Culture=neutral, PublicKeyToken=nullI)clr-namespace:ThreadingSimulator.ControlsThreadingSimulator.Controls  5      C&clr-namespace:ThreadingSimulator.EnumsThreadingSimulator.Enums  5      O Kmscorlib, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e0891&clr-namespace:System;assembly=mscorlibSystem 5      U QGongSolutions.WPF.DragDrop, Version=1.1.0.0, Culture=neutral, PublicKeyToken=nullkLclr-namespace:GongSolutions.Wpf.DragDrop;assembly=GongSolutions.Wpf.DragDropGongSolutions.Wpf.DragDrop 5	      J FMrMitch.Loaders, Version=1.1.0.1, Culture=neutral, PublicKeyToken=null:.clr-namespace:Loaders;assembly=MrMitch.LoadersLoaders 5
      M+clr-namespace:ThreadingSimulator.ConvertersThreadingSimulator.Converters  5      /    )ThreadingSimulator.Controls.MainContentUC   5      W SPresentationCore, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35R NWindowsBase, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=4.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35D 9http://schemas.microsoft.com/winfx/2006/xaml/presentation    5      R NSystem.Xaml, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5      Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5      @d2http://schemas.microsoft.com/expression/blend/2008     5      ;local)clr-namespace:ThreadingSimulator.Controls     5      8enums&clr-namespace:ThreadingSimulator.Enums     5      6sys&clr-namespace:System;assembly=mscorlib     5      [ddLclr-namespace:GongSolutions.Wpf.DragDrop;assembly=GongSolutions.Wpf.DragDrop     5	      Bloaders.clr-namespace:Loaders;assembly=MrMitch.Loaders     5
      B
converters+clr-namespace:ThreadingSimulator.Converters     5      -   5          >�Name$  Control��5       � 	Resources 5         BlockTypeValues S� 
MethodName S� 
ObjectType  System.Enum S� MethodParameters M� TypeName   BooleanToVisibilityConverter:  4ThreadingSimulator.Converters.InvertBooleanConverter  InvertBooleanConverter  Add �� 	UriSource  Edit  Save 
 Cancel 
 Delete  Preview 	 Run��%�  &	        &	 t     &	 �     &	 �     &	 �     &	 	    &	 C    &	 {    &	 �    &		 �    S� 5   
   $ 	GetValues��5      "  5       5      M� 5      $ enums:BlockType��6   5      �� 5   
   6N     5   
   6M   �� 5   
   $" ../Assets/icons8-plus-48.png?�6"   �� 5   
   $% ../Assets/icons8-compose-48.png?�6#   �� 5   
   $&  ../Assets/icons8-save-all-48.png?�6#   �� 5   
   $$ ../Assets/icons8-delete-48.png?�6%   �� 5   
   $# ../Assets/icons8-waste-48.png?�6%   �� 5    
   $* $../Assets/icons8-preview-pane-48.png?�6&   �� 5!   
   $" ../Assets/icons8-play-64.png?�6"   5"      .��5#      � .+�5$   
   � $��0 10 0 0q�6    � RowDefinitions 5%      �� 5&      $��25 �6    6.   �� 5'      6"   �� 5(      $��25 �6    6.   �� 5)      $��10 �6    6.    � ColumnDefinitions 5+      �� 5,      $��5 �6#   6/   �� 5-      $	��220 �6#   61   �� 5.      $��10 �6#   60   �� 5/      6%   �� 50      $��5 �6#   6/   �� 51      $��10 �6#   60   .+�53      �� $��0��6   $��1��54      	 �� Orientation$	 
Horizontal=�55      .+�56      �� $��Predefined examples:��6   69   �� 57      $��50 0 5 0q�58      
 � ToolTip$
 Add new example��59       
 ButtonStyle#��[
 5:      ��57      �� *AddCmd+��5;      �� 5<      #��[ 6    $��16��5=       $��16��5>       6-   5@      �� 5A      $
 Edit selected example��5B      #��[
 5C      ��5A      �� *	EditCmd+��5D      �� 5E      #��[ 6    $��16��5F       $��16��5G       6-   5I      5J      �� 5K      $��1��6   $��1��5L      $��Stretch=�5M      ��5N      �� *
Programs+ �� SelectedItem 5O      �� *	Program+{�5P      �� *
EditMode+ �� 	Converter# [ ��5Q      �� 5R      .R�5S      �  5T      �� 5U   "   $��* �63   �� 5V   "   $
��Auto �63   .+�5Y      �� $��0��6)   $	 Vertical=�5Z   )   .+�5[   "   �� $��0��6,   $	��130��5\   ,   $��0 1 0 0q�5]   ,   $��CharacterEllipsis=�5^   ,   ��5_   ,   �� *Name+
 5`   ,   �� *Name+6G   5a      ]� 5c      $��1��6(   $��Center=�5d   (   .+�5e   "   �� $��1��6)   $
 Delete example��5f   %   #��[
 5i   %   ��5g   %   ��  �� ElementName$ Control�� �� Path$ DataContext.DeleteCmd���5h   %   �� ��5j   &   �� 5k   *   #��[ 60   $��16��5l   ,   $��16��5m   ,   69   5o   #   5p      5q      5r      5t      � 5v      $��0��6   $��2��5w      $��3��5x       5y      �� 5z      $��20 �6$   62   �� 5{      $��20 �6$   62   �� 5|      6&   �� 5}      $��30 �6$   62   .+�5�      �� $��0��6   $��0��5�      $	 
Horizontal=�5�      $��Right=�5�      .+�5�      �� #��[
 5�      ��5�      �� *RunCmd+y�5�      �� *CanRun+# [ ��5�      �� 5�      $	 
Horizontal=�6)   .+�5�   "   �� #��[	 6(   $��16��5�   (   $��16��5�   (   65   �� 5�   "   $	��Run��6,   $
��Bold"�5�   ,   $��5 0 0 0q�5�   ,   6?   5�      5�      �� 5�      #��[
 5�      $
��10 0q�5�      ��5�      �� *
PreviewCmd+y�5�      �� *
CanPreview+# [ ��5�      �� 5�      $	 
Horizontal=�6)   .+�5�   "   �� #��[ 6(   $��22��5�   (   $��22��5�   (   $��0 -2 0 0q�5�   (   6<   �� 5�   "   $��Preview processes��6,   $
��Bold"�5�   ,   $��5 0 0 0q�5�   ,   6?   5�      5�      �� 5�      $
 Save example��5�      #��[
 5�      ��5�      �� *	SaveCmd+y�5�      �� *
EditMode+# [ ��5�      �� 5�      #��[ 6$   $��16��5�       $��16��5�       6-   5�      �� 5�      $
 Cancel edit��5�      #��[
 5�      ��5�      �� *	CancelCmd+y�5�      �� *
EditMode+# [ ��5�      �� 5�      #��[ 6$   $��16��5�       $��16��5�       6-   5�      5�      �� 5�      $��1��6   $	 
Horizontal=�5�      .+�5�      �� $��Name:��6   $��0 -3 0 0q�5�      y�5�      �� *ProgramSelected+# [ 6�   �� 5�      $	��150��5�      ��5�      �� *Program.Name+{�5�      �� *
EditMode+y�5�      �� *ProgramSelected+# [ 5�   ,   5�      �� 5�      $��2��6   $��0��5�      $��2��5�      $
��0 10q�5�      $
��Auto=�5�      $
��Auto=�5�      .��5�      �� -   5         ��Name$ Panel��5�   !   $	 
Horizontal=�5�   !   .+�5�      �� ��6'   �� *Program.Processes+��5�      �� 5�   "   .R�5�   &   A�  A� Columns 62   �� *Program.ProcessCount+5�   #   ��5�      �� 5�   "   .R�5�   &   �  5�   *   �� 5�   .   $��20 �6<   6J   �� 5�   .   $��20 �6<   6J   �� 5�   .   6>   .+�5�   *   �� $��0��61   $��16��5�   1   $
 Delete process��5�   1   $��16��5�   1   #��[
 5�   1   $��Right=�5�   1   $��0 0 5 0q�5�   1   {�5�   1   �� *
EditMode+��5�   1   �� $ Control��$" DataContext.DeleteProcessCmd�y�5�   1   �� $ Control��$ DataContext.EditMode�# [ ��5�   1   �� ��5�   .   �� 5�   2   #��[ 68   6[   5�   +   �� 5�   *   $��1��65   $	 
Horizontal=�5�   5   .+�5�   2   �� $��Process Name:��68   $��0 -3 0 0q�5�   8   6L   �� 5�   .   $	��130��5�   6   ��5�   6   �� *Name+{�5�   6   �� $ Control��$ DataContext.EditMode�6}   5�   +   �� 5�   *   $��2��62   $	��150��5�   2   $	��280��5�   2   $��0 10 0 0q�5�   2   )  #GongSolutions.Wpf.DragDrop.DragDrop   IsDropTarget . #   UseDefaultEffectDataTemplate .   	ListStyle#��[ 5�   2      DropHandler 5�   2   �� $ Control��$ DataContext�   IsDragSource 5�   2   �� $ Control��$ DataContext.EditMode�{�5�   2   �� *
EditMode+��5�   2   �� *Blocks+5�   W   5�   '   5   #   5     � 5     ��6   �� $ Panel��$ ActualHeight�.+�5     �� $
 Add new process��5  !   #��[
 5  !   $��Center=�5	  !   $��Center=�5
  !   ��5  %   �� *AddProcessCmd+y�5  !   �� *
EditMode+# [ ��5  "   �� 5  &   #��[ 6,   $��48��5      $��48��5      6-   5     5     5     5     �� 5     $��3��6     DraggableTemplateSelector#��[ 5      5     �� $ Control��$ DataContext.EditMode�y�5     �� *
EditMode+# [ ��5     ��  �� Source# [  ��5     �� 5     .R�5     A�  6*   �� # [  $ Count�5     5     5      �� 5"     $��2��6   $��2��5#     $	 
Horizontal=�5$     .+�5%     �� $��Current mode:��6   62   �� 5&     ��6   �� *ModeIndicator+6<   5'     5(     � 5)  
   
������� J� Opacity$	 0.5Q�5*     y�5+     �� *Busy+# [ 6f   � 5,  
   .+�5-       Loaders.ChromeLoader  $	��100��5.  #   $	��100��5/  #   y�5-  #   �� *Busy+# [ 5/  #   50     51     52     