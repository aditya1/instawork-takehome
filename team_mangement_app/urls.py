

from django.urls import path
from .views import TeamMemberListCreateAPIView, TeamMemberRetrieveUpdateDestroyAPIView

urlpatterns = [
    path('team-members/', TeamMemberListCreateAPIView.as_view(), name='team-member-list-create'),
    path('team-members/<int:pk>', TeamMemberRetrieveUpdateDestroyAPIView.as_view(), name='team-member-detail'),
]
