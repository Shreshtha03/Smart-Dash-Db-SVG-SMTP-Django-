from django.shortcuts import render
from django.core.mail import EmailMessage
from django.conf import settings
from django.http import JsonResponse
import os
import re

def email_form(request):
    if request.method == 'POST':
        body = request.POST.get('body', '')
        to_email = request.POST.get('to', '')
        attachment = request.FILES.get('attachment')
        
        if not re.match(r'^[\w\.-]+@[\w\.-]+\.\w+$', to_email):
            return JsonResponse({'error': 'Invalid email address'}, status=400)

        if attachment:
            ext = os.path.splitext(attachment.name)[1].lower()
            if ext not in ['.png', '.jpg', '.jpeg']:
                return JsonResponse({'error': 'Only PNG, JPG, and JPEG files are allowed'}, status=400)

        try:
            email = EmailMessage(
                subject='Email with Attachment',
                body=body,
                from_email=settings.EMAIL_HOST_USER,
                to=[to_email],  
            )
            
            if attachment:
                email.attach(attachment.name, attachment.read(), attachment.content_type)

            
            email.send()
            return JsonResponse({'message': 'Email sent successfully!'})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    
    return render(request, 'sendmail/contact.html')



















  # Use user-entered email